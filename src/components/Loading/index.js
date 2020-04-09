import {connect} from "react-redux";

import Loading from './component';


const mapStateToProps= ({loaded}) => {
  return { 
      load:loaded,
  };
}

export default connect(mapStateToProps)(Loading);
