import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions';

const Link = (props: any) => {

    if (props.active) {
        return <b className="filter selected">{props.children}</b>;
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                props.onClick();
            }}>
                {props.children}
            </a>
        );
    }
};


const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
