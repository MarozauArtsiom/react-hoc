import React from 'react';

export const WithLoaderComponent = () => {
    return function withLoader(WrappedComponent) {
        const loader = (props) => props.isLoading ?
            (<div className="lds-heart"><div></div></div>)
            : <WrappedComponent {...props}></WrappedComponent>
        return loader;
    }
}
