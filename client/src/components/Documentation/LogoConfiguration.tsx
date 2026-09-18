export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=' text-black text-xl font-semibold mt-8 dark:text-white'>
        Logo
      </h3>
      <div className='p-6 rounded-md border mt-4 border-border dark:border-dark_border'>
        <p className='text-base font-medium text-midnight_text dark:text-white/50 flex lg:flex-row flex-col'>
          1. Change Logo over here :{' '}
          <span className='font-semibold text-base overflow-x-auto'>
            src/components/Navbar.tsx
          </span>{' '}
        </p>
        <div className='py-4 px-3 rounded-md bg-black mt-8'>
          <div className='text-sm text-gray-400'>
            <p>&#x3C;Link href=&#x22;/&#x22;&#x3E;</p>
            <p className='ms-2'>&#x3C;Image</p>
            <p className='ms-3'>src=&#x22;/images/logo/logo.png&#x22;</p>
            <p className='ms-3'>alt=&#x22;RC SOFTWARE LABS LLC logo&#x22;</p>
            <p className='ms-3'>width={160}</p>
            <p className='ms-3'>height={48}</p>
            <p className="ms-3">{`style={{ width: 'auto', height: '48px' }}`}</p>
            <p className='ms-3'>quality={100}</p>
            <p className='ms-3'>priority</p>
            <p className='ms-3'>
              className=&#x27;transition duration-300 saturate-150
              hover:drop-shadow-[0_10px_30px_rgba(75,156,255,0.5)] dark:hidden&#x27;
            </p>
            <p className='ms-2'>/&#x3E;</p>
            <p className='ms-2'>&#x3C;Image</p>
            <p className='ms-3'>src=&#x22;/images/logo/logo.png&#x22;</p>
            <p className='ms-3'>alt=&#x22;RC SOFTWARE LABS LLC logo&#x22;</p>
            <p className='ms-3'>width={160}</p>
            <p className='ms-3'>height={48}</p>
            <p className="ms-3">{`style={{ width: 'auto', height: '48px' }}`}</p>
            <p className='ms-3'>quality={100}</p>
            <p className='ms-3'>priority</p>
            <p className='ms-3'>
              className=&#x27;transition duration-300 saturate-150
              hover:drop-shadow-[0_10px_30px_rgba(75,156,255,0.5)] hidden dark:block&#x27;
            </p>
            <p className='ms-2'>/&#x3E;</p>
            <p className='ms-3'>&#x3C;span className=&#x22;text-2xl font-semibold tracking-tight&#x22;&#x3E;</p>
            <p className='ms-5'>
              RC SOFTWARE LABS
            </p>
            <p className='ms-3'>&#x3C;/span&#x3E;</p>
            <p className='ms-2'>&#x3C;/Link&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  )
}
