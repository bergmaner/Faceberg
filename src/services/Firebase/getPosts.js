import { postRef } from './index';

export default async () => {
    let result;
    await postRef.once('value',snapshot =>{
        result = snapshot.val();
    });
    return result;
}