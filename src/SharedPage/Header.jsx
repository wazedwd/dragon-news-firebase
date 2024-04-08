import logo from '../assets/images/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <h2 className='text-[18px] text-[#706F6F] font-normal'>Journalism Without Fear or Favour</h2>
            <h3 className='text-xl font-medium text-[#706F6F]'>{moment().format('dddd MMMM DD, YYYY')}</h3>
        </div>
    );
};

export default Header;