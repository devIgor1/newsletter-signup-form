import { FC, useState } from "react"
import Successful from "./Successful"

interface AppProps {}

const App: FC<AppProps> = () => {
  const [submited, setSubmited] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")

  function handleSubmit() {
    if (!email) {
      return
    }
    setSubmited(true)
  }

  return (
    <>
      {!submited ? (
        <div className="min-h-screen min-w-full bg-light-purple flex items-center justify-center">
          <div className="w-934 h-642 bg-white rounded-3xl flex items-center justify-around">
            <section className="flex p-9 flex-col max-w-md">
              <h1 className="text-6xl font-roboto font-bold text-light-blue mb-6">
                Stay updated!
              </h1>
              <p className="text-light-blue font-roboto mb-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <div className="text-light-blue flex mb-2">
                <img src="../newsletter-sign-up-with-success-message-main/assets/images/icon-list.svg" />
                <p className="ml-3">
                  Product discovery and building what matters
                </p>
              </div>
              <div className=" text-light-blue flex mb-2">
                <img src="../newsletter-sign-up-with-success-message-main/assets/images/icon-list.svg" />
                <p className="ml-3">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="text-light-blue flex">
                <img src="../newsletter-sign-up-with-success-message-main/assets/images/icon-list.svg" />
                <p className="ml-3">And much more!</p>
              </div>

              <form className="mt-7 relative" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                  <label className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-light-blue text-xs font-roboto font-bold ">
                        Email adress
                      </span>
                    </div>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="peer border-2 font-roboto border-zinc-200 w-full outline-none rounded-md p-3 pl-5 text-light-blue invalid:bg-red-200 invalid:text-red-500 invalid:border-red-300 "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="invisible peer-invalid:visible text-xs text-red-500 font-roboto font-semibold absolute right-1 top-0">
                      Valid email required
                    </span>
                  </label>
                </div>
                <button className="bg-light-blue w-full rounded-md p-3 mt-4 text-white font-roboto text-base-">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </section>
            <section>
              <img src="../newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg" />
            </section>
          </div>
        </div>
      ) : (
        <Successful email={email} />
      )}
    </>
  )
}

export default App
