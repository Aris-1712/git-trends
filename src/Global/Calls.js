import Axios from 'axios'
import githubTrends from 'github-trends-api';
import {repo_API,dev_API} from './Endpoints'
export const getRepo = async()=>{
return await Axios.get(dev_API)
}