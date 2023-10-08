import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {

      const { googleLogin,githubLogin } = UseAuth();

      // Log in with social icon
      const handleSocialLogin = (media) => {
            media()
                  .then((result) => {
                        toast.success('Successfully Logged In')
                  })
                  .catch(error => toast.error(error.message))
      }

      return (
            <div>
                  <div>
                        <p className="font-bold">Log in with</p>
                        <div className="flex">
                              <span onClick={() => handleSocialLogin(googleLogin)}><AiOutlineGoogle className="text-[#FD5F00] text-4xl cursor-pointer"></AiOutlineGoogle></span>
                              <span onClick={() => handleSocialLogin(githubLogin)}><AiOutlineGithub className="text-[#FD5F00] cursor-pointer text-4xl"></AiOutlineGithub></span>
                        </div>
                  </div>
            </div>
      );
};

export default SocialLogin;