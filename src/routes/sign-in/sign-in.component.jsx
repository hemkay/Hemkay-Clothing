import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }
    return (
        
        <button onClick={logGoogleUser}>
            Sign In
        </button>
    )
}

export default SignIn