import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const typeOfWork = [
  {id: 1, work: 'Civil Work'},
  {id: 2, work: 'O&M Work'},
  {id: 3, work: 'Supply Cum Erection'},
]

const typeOfTender = [
  {id: 1, tender: 'Single Tender'},
  {id: 2, tender: 'Limited Tender'},
  {id: 3, tender: 'Open Tender'},
]

const OpenTenderDocument = () => {
  const [pf, setPf] = useState('')
  const [valueofwork, setValueofwork] = useState('')
  const [typeWork, setTypeWork] = useState('Civil Work')
  const [typeTender, setTypeTender] = useState('Single Tender')

  const navigate = useNavigate()

  const handleChange = event => {
    const {name, value} = event.target
    if (name === 'pf') setPf(value)
    else if (name === 'valueofwork') setValueofwork(value)
    else if (name === 'typeWork') setTypeWork(value)
    else if (name === 'typeTender') setTypeTender(value)
  }

  const formSubmit = event => {
    event.preventDefault()
    if (pf.trim() && valueofwork.trim()) {
      if (typeTender === 'Single Tender' && typeWork === 'O&M Work') {
        navigate('/single')
      } else if (typeTender === 'Limited Tender' && typeWork === 'O&M Work') {
        navigate('/limited')
      } else if (typeTender === 'Open Tender' && typeWork === 'O&M Work') {
        navigate('/open')
      }
    } else {
      alert('Fill the Details')
    }
    setPf('')
    setValueofwork('')
  }

  return (
    <div className="bg-cont">
      <div className="form-cont">
        <img
          className="ntpc-img"
          src="https://images.seeklogo.com/logo-png/30/1/ntpc-logo-png_seeklogo-305340.png"
          alt="ntpc"
        />
        <form onSubmit={formSubmit}>
          <label className="input" htmlFor="prno">
            PR NO
          </label>
          <br />
          <input
            name="pf"
            value={pf}
            onChange={handleChange}
            id="prno"
            type="text"
            placeholder="Pr Number"
          />
          <br />
          <label className="input" htmlFor="work">
            Value of the Work
          </label>
          <br />
          <input
            name="valueofwork"
            value={valueofwork}
            onChange={handleChange}
            id="work"
            type="text"
            placeholder="Value of work"
          />
          <br />
          <label htmlFor="type" className="input">
            Type of Work
          </label>
          <br />
          <select
            name="typeWork"
            value={typeWork}
            onChange={handleChange}
            id="type"
          >
            {typeOfWork.map(work => (
              <option value={work.work} key={work.id}>
                {work.work}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="tender" className="input">
            Type of Tender
          </label>
          <br />
          <select
            name="typeTender"
            value={typeTender}
            onChange={handleChange}
            id="tender"
          >
            {typeOfTender.map(tender => (
              <option value={tender.tender} key={tender.id}>
                {tender.tender}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default OpenTenderDocument;