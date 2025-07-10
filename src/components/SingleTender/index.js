import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import jsPDF from 'jspdf'
import './index.css'

const singleLocation = [
  {
    id: 1,
    singleTender:
      'Ramagundam Super Thermal Power Station P.O.: Jyothinagar, Distt. Karim Nagar (Telangana) - 505215.GST No. 36AAACN0255D1ZZ',
  },
  {
    id: 2,
    singleTender:
      'Simhadri Super Thermal Power Station P.O.: NTPC Simhadri, Distt. Visakhapatnam (Andhra Pradesh) - 531020GST NO. 37AAACN0255D2ZW.',
  },
  {
    id: 3,
    singleTender:
      'Kudgi Super Thermal Power Station P.O.: Kudgi, Thaluk: Basavan Bagawadi, Distt. Vijayapura (Karnataka) - 586121. GST NO. 29AAACN0255D1ZU',
  },
  {
    id: 4,
    singleTender:
      'Rajiv Gandhi Combined Cycle Power Project P.O.: Choolatheruvu, Distt. Alappuzha (Kerala) - 690506. GST NO. 32AAACN0255D2Z6',
  },
]

const defectPeriod = [
  {id: 1, tenderPeriod: 'Not Applicable'},
  {id: 2, tenderPeriod: '1 Month'},
  {id: 3, tenderPeriod: '2 Months'},
  {id: 4, tenderPeriod: '3 Months'},
  {id: 5, tenderPeriod: '4 Months'},
  {id: 6, tenderPeriod: '5 Months'},
]

const SingleTender = () => {
  const [pack, setPack] = useState('')
  const [locat, setLocat] = useState(singleLocation[0].singleTender)
  const [contract, setContract] = useState('')
  const [period, setPeriod] = useState('Not Applicable')
  const [listSingle, setListSingle] = useState([])

  const navigate = useNavigate()

  const handleChange = event => {
    const {name, value} = event.target
    if (name === 'pack') setPack(value)
    else if (name === 'locat') setLocat(value)
    else if (name === 'contract') setContract(value)
    else if (name === 'period') setPeriod(value)
  }

  const formSubmit = event => {
    event.preventDefault()
    if (pack && locat) {
      const newObj = {
        id: Date.now(),
        pack,
        locat,
        contract,
        period,
      }
      setListSingle(prev => [...prev, newObj])
    }
  }

  const singleBtn = () => {
    navigate('/')
  }

  const generate = item => {
    const doc = new jsPDF()
    doc.text('Tender Details:', 10, 10)
    doc.text(`Package Name: ${item.pack}`, 10, 20)
    doc.text(`Location: ${item.locat}`, 10, 30)
    doc.text(`Completion Period: ${item.contract}`, 10, 40)
    doc.text(`Defect Liability Period: ${item.period}`, 10, 50)
    doc.save(`${item.pack}_tender.pdf`)
  }

  return (
    <div className="single-bg">
      <div className="single-form">
        <div className="single-ntpc">
          <img
            className="ntpc-img-single"
            src="https://images.seeklogo.com/logo-png/30/1/ntpc-logo-png_seeklogo-305340.png"
            alt="ntpc"
          />
          <img
            className="single-img"
            src="https://www.psuconnect.in/sdsdsd/50_years_of_NTPC.jpg"
            alt="single"
          />
        </div>
        <form onSubmit={formSubmit}>
          <h1 className="head">Single Tender Form</h1>
          <label className="single-label" htmlFor="package">
            Name of the Package :
          </label>
          <input
            value={pack}
            onChange={handleChange}
            name="pack"
            id="pack"
            type="text"
            placeholder="Name of the package"
          />
          <br />
          <label className="single-label" htmlFor="locat">
            Location of Contract :
          </label>
          <select
            value={locat}
            onChange={handleChange}
            name="locat"
            className="single-location"
            id="locat"
          >
            {singleLocation.map(single => (
              <option value={single.singleTender} key={single.id}>
                {single.singleTender}
              </option>
            ))}
          </select>
          <br />
          <label className="single-label" htmlFor="contract">
            Completion Period/Duration of Contract :
          </label>
          <input
            value={contract}
            onChange={handleChange}
            name="contract"
            id="contract"
            type="text"
            placeholder="duration of contract"
          />
          <br />
          <label className="single-label" htmlFor="period">
            Defect Liability Period :
          </label>
          <select
            value={period}
            onChange={handleChange}
            name="period"
            id="period"
          >
            {defectPeriod.map(defect => (
              <option value={defect.tenderPeriod} key={defect.id}>
                {defect.tenderPeriod}
              </option>
            ))}
          </select>
          <br />
          <div>
            <button type="submit">Generate</button>
            <button onClick={singleBtn} type="button">
              Back
            </button>
          </div>
        </form>
      </div>
      <div>
        {listSingle.map(items => (
          <div key={items.id}>
            <h1>{items.contract}</h1>
            <h1>{items.period}</h1>
            <h1>{items.locat}</h1>
            <h1>{items.pack}</h1>
            <button className="singlebtn" onClick={() => generate(items)}>
              Generate PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleTender;