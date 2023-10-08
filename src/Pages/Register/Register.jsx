
const Register = () => {
      return (
            <div className="flex justify-between">
                  <div className="lg:w-1/2">
                        <img src="https://i.ibb.co/4NJXBMH/4934425.jpg" alt="welcome image" />
                  </div>
                  <div className="lg:w-1/2">
                        
                        <div className="hero w-full min-h-screen bg-base-200">
                              <div className="hero-content ">
                              
                                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                          <form className="card-body">
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Email</span>
                                                      </label>
                                                      <input type="email" placeholder="email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Password</span>
                                                      </label>
                                                      <input type="password" placeholder="password" className="input input-bordered" required />
                                                      <label className="label">
                                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                      </label>
                                                </div>
                                                <div className="form-control mt-6">
                                                      <button className="btn btn-primary">Login</button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;