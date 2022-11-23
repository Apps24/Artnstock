import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../axios';
import { authActions } from '../../store/authSlice';

const TempVerifyPage = () => {
    const params = useParams()
    const dispatch = useDispatch();
  
    const [name, setName] = useState("");

    const onStorageUpdate = (e) => {
      const { key, newValue } = e;
      if (key === "name") {
        setName(newValue);
      }
    };
  
    const handleChange = (e) => {
      setName(e.target.value);
      localStorage.setItem("name", true);
    };
  
    useEffect(() => {
      setName(localStorage.getItem("name") || "");
      window.addEventListener("storage", onStorageUpdate);
      return () => {
        window.removeEventListener("storage", onStorageUpdate);
      };
    }, []);

    useEffect(() => {
      verifyCustomer(params.id, params.otp)
    },[params.id,params.otp])
  
    const verifyCustomer = (userId,userOTP) => {
      httpClient.get("/user_master/verifyUser/"+String(userId)+"/"+Number(userOTP)).then((res) => {
        console.log(res);
        if(res.data != null) {
          dispatch(authActions.login())
          sessionStorage.setItem("verifyItem",true)
          window.close()
        } else {
        }
      }).catch((err) => {
        // console.log(err);
        alert(err)
      })
  
    }

  return (
    <div>Verifying User....</div>
  )
}

export default TempVerifyPage