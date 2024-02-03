import "./GoogleBtn.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
export default function GoogleBtn() {
  const [name, setName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState('');
  const [locale, setLocale] = useState('');
  const [picture, setPicture] = useState('');
  const [aud, setAud] = useState('');
  const [azp, setAzp] = useState('');
  const [exp, setExp] = useState('');
  const [iat, setIat] = useState('');
  const [iss, setIss] = useState('');
  const [jti, setJti] = useState('');
  const [nbf, setNbf] = useState('');
  const [sub, setSub] = useState('');

  return (
    <GoogleOAuthProvider clientId="485032838316-7ldnrsssvb5jrgnvlg8qa6ho9pd5vr2u.apps.googleusercontent.com">
      <div className="container_google">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var credentialResponseDecoded = jwtDecode(
              credentialResponse.credential
            );

            console.log(credentialResponseDecoded);

            setName(credentialResponseDecoded.name);
            console.log(name);
            setGivenName(credentialResponseDecoded.given_name);
            console.log(givenName);
            setFamilyName(credentialResponseDecoded.family_name);
            console.log(familyName);

            setEmail(credentialResponseDecoded.email);
            console.log(email);
            setEmailVerified(credentialResponseDecoded.email_verified);
            console.log(emailVerified);

            setLocale(credentialResponseDecoded.locale);
            console.log(locale);

            setPicture(credentialResponseDecoded.picture);
            console.log(picture);

          /*setAud(credentialResponseDecoded.aud);
            console.log(aud);

            setAzp(credentialResponseDecoded.azp)
            console.log(azp);

            setExp(credentialResponseDecoded.exp)
            console.log(exp);

            setIat(credentialResponseDecoded.iat)
            console.log(iat);

            setIss(credentialResponseDecoded.iss)
            console.log(iss);

            setJti(credentialResponseDecoded.jti)
            console.log(jti);

            setNbf(credentialResponseDecoded.nbf)
            console.log(nbf);

            setSub(credentialResponseDecoded.sub)
            console.log(sub); */
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}
