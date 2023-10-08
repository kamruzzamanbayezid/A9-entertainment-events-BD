
const Banner = () => {
      return (
            <div className="carousel w-full max-h-[80vh]">
                  <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/bNMb3LQ/flat-lay-composition-toys-with-copyspace.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❮</a>
                              <a href="#slide2" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/JkJGsQV/happy-adult-man-singing-karaoke-holding-microphone-looking-camera-standing-orange-sweater.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❮</a>
                              <a href="#slide3" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/F53h2Gh/young-women-with-movie-film-reel.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❮</a>
                              <a href="#slide4" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❯</a>
                        </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/r0DxVvt/rear-view-excited-fans-having-fun-music-festival-taking-pictures-stage-with-their-smart-phones-copy.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❮</a>
                              <a href="#slide1" className="py-3 px-1 lg:px-2 rounded-xl bg-[#FD5F00] border-none text-sm lg:text-xl text-[#FFF]">❯</a>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;