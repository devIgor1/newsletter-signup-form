interface EmailProps {
  email: string
}

const Successful = ({ email }: EmailProps) => {
  return (
    <div>
      <div className="min-h-screen min-w-full bg-light-purple flex items-center justify-center">
        <div className="w-436 h-449 bg-white rounded-3xl flex items-start flex-col justify-around">
          <div className="flex flex-col items-start p-32">
            <img src="../newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg" />
            <h1 className="text-4xl">Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to {email}. Please open it and
              click the button inside to confirm your subscription
            </p>
            <div className="flex justify-center">
              <a href="/">Dismiss message</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Successful
