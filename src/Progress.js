
const Progress = (props) => {
    const progress = props.pro;
    
    return(
        <div class="progress d-flex py-3 my-1">
            <p className=" text-dark fw-bolder ps-2">{progress.title}</p>
        <div class="progress-bar " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    );
  }
  export default Progress