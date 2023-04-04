import reduxLogo from '../assets/reduxLogo.png';

const Header = () => {
  return (
    <div className='relative w-full h-16 bg-zinc-900 flex justify-center items-center'>
      <a className='absolute left-3' href='https://react-redux.js.org/'>
        <img src={reduxLogo} width={40} height={40} />
      </a>
      <h1 className='text-center text-gray-300 text-3xl'>CRUD APP USING REDUX</h1>
    </div>
  );
};

export default Header;
