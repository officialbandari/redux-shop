import React from 'react';
import { connect } from 'react-redux'
import { buyLapTop } from './actions/index'



const Shop = (props) => {
    return (
        <>
            <div className="py-8">
                <p>{props.numberOfLaptops}</p>
                <button className="text-purple-400" onClick={props.changeIt} >Add</button>

            </div>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        numberOfLaptops: state.numberOfLaptops
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        changeIt: () => dispatch(buyLapTop()),
    }
}


export default connect(mapStateToProps, mapDispatchToPros)(Shop);