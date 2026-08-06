function AboutIntro() {
  return(
    <section className="w-full flex justify-center items-center py-20 bg-[#f3f4f6]">
      <div className="w-[95%] flex flex-col gap-9">
        <span>
          <h1 className="font-medium text-[27px] lg:text-[32px] text-[#111827]">Why Choose Evora?</h1>
          <p className="lg:text-[14px] text-[15px] text-[#374151]">Advanced technology, Real world benefits.</p>
        </span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0klEQVR4nO1ZW4sUVxA+uF4CQrzsnppxSRQvGNiHQFgFiQ+CuklXzWpUWPAH+KIIIgkJCYhP6rqCEPLkQ9idqvG2iiD5ARE10cCCCPrgDVHUjfsgmqigEFeq5/RMb8+ok54ZpzvZDxpmzuk69dW51aWNmcT/BF3DfdNBaD8wPQDG+8C4T9tM2gCC/SA0Hnn2mrQBdBWExi3T57aAK31DGO+btMEKjSn5jgIi5HNrfaOExsx/Y2thv0kdfl01VQ94yQjGfdpm0gpwhpi0AyYNSZgjq9eQrrh8Gu3IQOgcMJ6NL4/x+CTNkUFcPiXBAq4sCQq9bD+yvtO8Z7QfWd+puiv54L13Ck+4+yc6s78s0zfmUPe0WkiA5DZaxtO6ty3jcyu0rWYLDnVPgwJ+rTqrcbFMe2o7XGqMvzI4CowDlvFUaJCrGcbVbxxg9+4pIMgVBBgfWcGD8/K989+mP8O4WnWU9eEpx+FPXQk1oq4o2jJ5IHQtROz4XPE+qnzP21rsp8cguMtthzNhg2DI+zQqp2NZpmOh966rTtMMLPnRm2EZv7dCTx3Zvy3nvgvPEDCO+DOZp00Roh+C0E9uVX8J2lXWMn6rY0ExsHwKgj+oLtNszDn6xcfAdCK03S6UDaEnwPRqweCqD6JydshbHI2CreDF0BY8+a6t1xQAY48VugJM56PhezVDsj97Nnp9guBv/plg7DFJgmX8Q8m253FZRZ+7PvUdk3SA2+sZXrcw2teRx6WpSbBA6KbzOzsq+ph2urNwzSQdGfbWuVm/HXaexduJ7vqrVcBekwYA4yU38/mgzTKKO+gjJi3oOJzrdn7mVdCmv/1iRN77zKQFswa/mh3NQ4L/2meSji4/CcItwYG3gr8HffrbXb239J3EVh1BvBUgdKPk7YUuw+HcorBX99vKXvyGyrSUdLZAC8KhRLt8+YkVfOYMuJLh3GYz3NdWITjc16Z9fjRQXLFnKht0z8v3ztexm25AhntmutTz5YQwg/F4EBFXNaB6zassUxqHHhQTKexXXU0xAhg3WME7ztn9E05uHIHxeA+OBuNYpj06tlutO6rTNKJq4ZKZAxp2h/KEkax4yysKDHENiRQmsuItD1KBIOT3OQg9bEQVxU+ULOP2mrZOvRjua1NdxeSs6gTEq6JYxhd2kLLmPcMOUlZ1N7CKUkPV4k1kBC+G/cm/BcTlU62KUlPVokmVRojLJ1JFqbtqUa8hXQ3mY1plSGIwaUhioGGIOtbyId2fyk9vwDhQxYsPmFR/nhZvTWqqJ812rC1Dox1ry5AYRzYJ0xq8BuQdTz6cGiaeAAAAAElFTkSuQmCC" alt="omnichannel"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Smart Connectivity</h1>
                <p className="text-[13px] font-normal text-[#374151]">Stay connected with real-time insights.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nNWZXYhVVRTHlx8ZqSDjvXudO2pBJhWBhORXggyIH2etc0d7cPIpJJQIfCh8MMSHKwThBwY+DiLOWWvuCBd9CIyCoAkMjMh6USMYPx4UgxSR8qP8GNnn7jMz3rlnvJjO7POD83T/57DX3f+99tp7ATxPal1TjNJPqDz4pMco3zFxtA58JJCws5Ug0ifopU3gI6j0bfJvC+3M0gRCq+qB0OW3al3TwDdMT/gaKj0wQv9iX2eQpUOhE/Vgo8/AR4zSl242NEtT0HVvJMEq/zMnfq8AvjGv1vWSEb5et0y4PEtnlLqdrQ6CjwTCW5IBCv2WpSkdDo0Ruo1C960NwUdQ6JckCwlvydZwxWWrY+AjGJffdXa5EciaGc00Cw6GL6LS1foa4hXgI0ZI3QAPZGlQaavT/Aw+0l4tF+0OjcIPizG93lQ0CJOM8FmXcrvAR4zQTmerb7I0xV4iV5JchP6OqeAdlcpko3TBlRrlLJlR+s6l5U/BR1Cj9W4DvGSLxaaaXlpobYfCN9tqq2eB53XVjmwNx25/2Qc+YtK6SvluIGuwmabQt35OUncJ32uPy6+Az3UVCvVkaVD5C5dyq+Aj80bUVSUNlzTTtHeXpxula0kiqEZLweu6SvnXLI0R2uY0P4CvoNBpt8g/HEPze4unxJPjO/p0gBour29udM1aLEtnhPpbPLefGd8IGuqq/5NOA+FltpS3Wa+o0UqYsLpK6QFWo/lP8w17RrezMKGHK5PWVUInnvobSp+ndZepdcx8tiNsdRBC51vyvVB/8/ejt1H5v6RkiaPVMFGg8skWM9HAqJf7O6YOZzs+BD6DSvtdIHtH/8a7nC2vzKpGbeAzxlmvENPixiugepLgQYx5A/hMUI2Wuv3lgj0RDv1QqUxOLTnWfZf3tkKl7S6Iv+x1EPiOaWKrQDpfReG/6zMVbgTfKWm4ZJSt7IWDO+Iaoa8gD6DQvkZbYUwfu1R73RzhEuQB02Cr2T3RXHtZlwQS8weQB0pNbGWt5Gboa8gL2GAro9Hm+sbHN9uOrn0Z8gIqD6S2smthqLUg0UeQF0oNtkKl4y5Lff/YppgnWxWV33dB3fK29/EkW9kWsxH60x2WPoE8UYhpcWorI9Tn9oxTWVen3oJKe1wg59Lmf6FafhPyBjpbDZ8KPW01t2Krocc2QLvfeQHyBirvHQ6C7xXjcBHkERxhK6O0G/JIYYSt7EK33VrII5jaSuh+1k18LkDlP7zuQEGLJO024R/HusAeLx4Bt8p74psGLpkAAAAASUVORK5CYII=" alt="lightning-bolt--v1"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Fast Charging</h1>
                <p className="text-[13px] font-normal text-[#374151]">Charge faster, get back on the road sooner.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2">
              <img className="lg:w-9 w-13" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVR4nM2VMU5DMQyGnxgYKsbaLVfgCAiEuj37denABCPcAaYeoFyAAZX6f1PHLpyEqQMCigQScIWiCFWCJ57SNI2KpQyJ/edzotjJMo+R6QdD538Ok88s1hg6X8W3OUCrlC5DZrXXgrohsya08Gds8kKm+6GJ0Sg/cBA/IOJeeRntZgH9/hZDT5MBuJTz6FdVF9S+yYmgb8kAbHLLkEESQBPFIUEeaXy0s3bA3vh4m0zvGUXPzQny/qPAptEAMrlkyF01jqATgl5EAxg6XWTssv9eK3ruVO500YCqb/e62yDoQ6vUzi/nugBkesWQYag2ACCvriaSARhytop2OYDlJ64fJQP47J8ATJ/d7xS6+aKd+ANLETJ9Cv2TnYZM8+qGX8PA8J8JTYhMAAAAAElFTkSuQmCC" alt="external-battery-charge-mobile-telephone-those-icons-lineal-those-icons"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Battery Safety </h1>
                <p className="text-[13px] font-normal text-[#374151]">Advanced protection for complete peace.</p>
              </span>
            </div>

            <div className="flex flex-row lg:gap-4 gap-2 items-center py-3 px-2">
              <img className="w-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVR4nO3awUrDQBDG8X0FS3cu6k19lOJMX6v6HDqLSAk92b6VBa2nnpRNmoOIOkN2Q8XvD7mVGX7J9rYh/Ocm6fqMVBpKvKMk72WePItX04f55WiIqLItB/j8RJXt5G5+Wh3SfYl24VPJhXkWKa9bkPIy1K4/TjXe2snj7LyDyEuoXX8EfvnNbVTefz02vI8qN0PnjwdRefvpTz10fpEsi/Jb//6L8GLo/CLVXkSAOAPEGAHiDBBjBIgzQIwRIM4AMUaAOAPEGAHiDBBjBIgzQIwRIM4AMUaAOAPEGAHiDBBjBIgzQIwRIM4AOTqIymtelK9y/PELA7zqlvG6JKa9qJNkc4A0oXbTe76KiZ/7I1DjUk3U2UUYo8MFmGV/zIo8eZZKMxriWPsA3ytdV/+1vn8AAAAASUVORK5CYII=" alt="iphone14-pro"></img>
              <span className="flex flex-col">
                <h1 className="text-[13px] font-medium text-[#111827]">Mobile Control</h1>
                <p className="text-[13px] font-normal text-[#374151]">Control & monitor your vehicle anytime.</p>
              </span>
            </div>
        </div>
        
      </div>
    </section>
  );
}


function TeamSection() {
  return <section><h2>Our Team</h2></section>;
}

export default function About() {
  return (
    <>
      <AboutIntro />
      <TeamSection />
    </>
  );
}