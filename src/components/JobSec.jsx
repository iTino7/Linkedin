const JobSec = ({ data, last }) => {
  return (
    <div className={`d-flex mx-0 mt-3 p-3 ${!last && "border-bottom "}align-items-center  justify-content-between px-4`}>
      <div>
        <h4>{data.company_name}</h4>
      </div>
      <div>
        <div>
          <a href={data.url} className="text-dark fw-semibold fs-5" target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <p className="text-end">{data.category}</p>
        </div>
      </div>
    </div>
  );
};

export default JobSec;
