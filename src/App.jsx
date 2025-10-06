
import './App.css'

function App() {

  return (
    <div className="bg-cyan-400 w-full min-h-screen" dir='rtl'>
      <div className='tree-bg absolute bottom-0 left-0 lg:w-[540px] lg:h-[640px] z-10'>
        <img src='./assets/images/tree-bg.png' alt='' className='w-full h-full' />
      </div>
      <div className='login-box overflow-auto h-full max-h-[606px] lg:h-[606px] lg:overflow-hidden w-11/12 mx-auto lg:w-full max-w-[972px] shadow-md rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white lg:flex lg:flex-row lg:items-center lg:justify-center'>
        <div className="px-11 py-14 w-full h-full lg:w-3/5 bg-[url('./assets/images/bg-login-form.png')] bg-no-repeat bg-left-bottom lg:bg-[length:200px_300px]">
          <div className='w-full h-[100px] max-w-[500px] mx-auto mb-9'>
            <img src='./assets/images/logo.png' alt='' className='w-full h-full' />
          </div>
          <div className='mb-12'>
            <a href='' className='block w-full text-center bg-gray-50 text-gray-800 rounded-3xl border border-gray-800 py-4 text-base'>سامـــانه جامع داده پرداز</a>
          </div>
          <div className=''>
            <form>
              <div className="relative mb-10 w-full">
                <input
                  dir='ltr'
                  placeholder='info@Test.com'
                  id="email"
                  type="email"
                  className="peer p-4 border border-gray-100 text-gray-700 shadow-xs w-full rounded-xl focus:outline-none focus:border-cyan-400 focus:text-cyan-400 text-sm"
                />
                <label
                  htmlFor="email"
                  className="text-xs text-gray-400 block px-2 absolute -top-2 right-4 bg-white 
                 peer-focus:text-cyan-500 transition-colors duration-200"
                >
                  پست الکترونیک
                </label>
              </div>
              <div className="relative flex flex-col items-end mb-4 w-full">
                <input
                  placeholder='رمز عبور'
                  id="password"
                  type="password"
                  className="peer p-4 border border-gray-100 text-gray-700 shadow-xs w-full rounded-xl focus:outline-none focus:border-cyan-400 focus:text-cyan-400  text-sm"
                />
                <label
                  htmlFor="password"
                  className="text-xs text-gray-400 block px-2 absolute -top-2 right-4 bg-white 
                 peer-focus:text-cyan-500 transition-colors duration-200"
                >
                  رمز عبور
                </label>
                <span className='block text-xs text-orange-500 mt-2'>.لطفاً این فیلد را پر کنید</span>
              </div>
              <div className='mb-5 flex items-center gap-1'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className='text-sm text-gray-800'>مرا به خاطر داشته باش</label>
              </div>
              <div className='w-full'>
                <button className='bg-orange-500 text-white text-base text-center py-4 rounded w-full'>ورود</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-2/5 h-full bg-[url('./assets/images/news-bg.png')] bg-no-repeat bg-center bg-cover bg-cyan-400 px-11 py-14 flex flex-col items-start justify-between">
          <div className="w-full flex items-center gap-4">
            <div className="w-14 h-14">
              <img src='./assets/images/news-logo.png' alt='' className='w-full h-full' />
            </div>
            <div className='border-r-4 border-gray-50 pr-3'>
              <h2 className="text-3xl text-white font-bold mb-6 font-mono">NEWSLETTER</h2>
              <span className="text-xl text-white font-normal">خبـــرنامه</span>
            </div>
          </div>
          <div className='w-full'>
            <span className="text-s text-white block mb-16"> جلسه بررسی ارزیابی فصلی با حضور مسئولین مناطق و کارشناسان</span>
            <div className="pr-7 border-r border-white mb-16">
              <img src='./assets/images/portal-bg.png' alt='' className=""/>
            </div>
            <div className='w-full flex items-center justify-between'>
              <a href='' className='flex items-center gap-1'>
                <img src='./assets/images/svg/right-arrow.svg' alt='' className=''/>
                <span className="text-xs text-white">قبلی </span>
              </a>
              <a href='' className='flex items-center gap-1'>
                <img src='./assets/images/svg/left-arrow.svg' alt='' className=''/>
                <span className="text-xs text-white">بعدی </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
