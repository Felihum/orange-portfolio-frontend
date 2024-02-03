import './GoogleBtn.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
export default function GoogleBtn(){

  const [email,setEmail] = useState('')
    return(
      <GoogleOAuthProvider clientId="485032838316-7ldnrsssvb5jrgnvlg8qa6ho9pd5vr2u.apps.googleusercontent.com">
        <div className='container_google'>
            <GoogleLogin
  onSuccess={credentialResponse => {
    var credentialResponseDecoded= jwtDecode(credentialResponse.credential);
	
    console.log(credentialResponseDecoded);
    setEmail(credentialResponseDecoded.email);
    console.log(email);
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </div></GoogleOAuthProvider>
    )
}

