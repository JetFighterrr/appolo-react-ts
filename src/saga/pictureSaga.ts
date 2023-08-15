import { call, put, takeEvery } from 'redux-saga/effects';
import { errorUpdateImage, asyncUpdateImage } from '../store/actions';
import { PictureActionTypes, RequestUpdateAction } from "../store/type/picture";
import  axios  from 'axios';
// import { OptionInterface } from "../store/type/options";
// eslint-disable-next-line
// import { GraphQLClient, request, gql } from 'graphql-request'

import { URL, HEADERS, graphQlPictureBody, graphQlPictureQuery, } from "../data/graphQlQueryData";

function* getPictureWorker(action: RequestUpdateAction){
    try {
        const graphQlQuery: string = graphQlPictureQuery(action.payload);
        // const graphQLClient = new GraphQLClient(URL, {

        console.log('query started');
        // console.log(graphQlPictureQuery(action.payload));
        console.log(graphQlQuery);
        // @ts-ignore
        const response: any =  yield call(
            axios.post,
            URL,
            graphQlPictureBody(graphQlPictureQuery(action.payload)),
            {
            method: "POST",
            headers: HEADERS,
        });
        // @ts-ignore
        // const response: any = yield call(fetch, URL, {
        //     method: "POST",
        //     // mode: "no-cors",.
        //     redirect: 'follow',
        //     credentials: {
        //         sameOrigin: false
        //     },
        //     headers: HEADERS,
        //     body: graphQlPictureBody(graphQlPictureQuery(action.payload)),
        // });

        console.log('query completed');

        // console.log(JSON.stringify(response));
        // console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response?.data?.data));
        // console.log(JSON.stringify(response?.data?.data?.image));
        console.log(JSON.stringify(response?.data?.data?.image?.fileName));
        yield put(asyncUpdateImage(response?.data?.data?.image?.fileName));
    } catch (error) {
        console.log('error during execution');
        console.log(`error: ${JSON.stringify(error)}`);
        // @ts-ignore
        yield put(errorUpdateImage(error!.message || 'Unknown Error'));
    }
}

function* pictureWatcher(){
    yield takeEvery(PictureActionTypes.REQUEST_UPDATE_IMAGE, getPictureWorker);
}

export {pictureWatcher};