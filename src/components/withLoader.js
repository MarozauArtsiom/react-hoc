import React from 'react';
import { Loader } from './loader';

export const WithLoaderComponent = (displayName) => {

    return function withLoader(WrappedComponent) {
        const loaderHOC = (props) => props.isLoading ?
            (<Loader />)
            : <WrappedComponent {...props}></WrappedComponent>
        // loader.displayName = `withLoader(${displayName})`
        return loaderHOC;
    }
}
