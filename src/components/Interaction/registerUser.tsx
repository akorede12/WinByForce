import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');

 export const RegisterUser = async () => {
  try {
  const signer = await provider.getSigner();
  // signer contract
  const sContract = new ethers.Contract(contractAddress, contractAbi.abi, signer);    
  const txn = await sContract.register();
  await txn.wait();
  console.log("user registered")
  }
  catch (error) {
      console.error('user registeration failed', error);
  }
  return(
    <button className="bg-transparent hover:bg-white text-white font-semibold py-2  border-white border-2 w-64 h-10 rounded-full" onClick={RegisterUser}>
        REGISTER AS USER
    </button>
  )
}

export default RegisterUser;