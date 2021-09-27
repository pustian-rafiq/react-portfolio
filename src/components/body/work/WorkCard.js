function WorkCard ({ item }) {
  return (
    <div className='work-card'>
      <img src={item.companyLogo} alt={item.company} className='company-logo' />
      <div className='work-info'>
        <h3 className='company-name'>
          {item.company}
        </h3>
        <label className='designation'>
          {item.designation}
        </label>

        <div className='work-dates'>
          <label>
            {item.joiningDate} - {item.endDate}
          </label>
        </div>
        <div className='work-desc'>
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}
export default WorkCard
