
import Quotes from '../components/quotes'
import SigninForm from '../auth/signin'



const Signup = () => {
  return (
    <div className='grid lg:grid-cols-2'>
      <div>
        <SigninForm type="signin"/>
      </div>
      <div className="hidden lg:block">
          <Quotes/>
      </div>
    </div>
  )
}

export default Signup
