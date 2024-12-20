
import Quotes from '../components/quotes'
import SignupForm from '../auth/signup'

const Signup = () => {
  return (
    <div className='grid lg:grid-cols-2'>
      <div>
        <SignupForm type="signup"/>
      </div>
      <div className="hidden lg:block">
          <Quotes/>
      </div>
    </div>
  )
}

export default Signup
