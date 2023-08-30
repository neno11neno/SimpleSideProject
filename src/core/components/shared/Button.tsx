import Button from '@mui/material/Button';

interface ButtonProps {
    text: string;
    color: string;
  }

const TbbButton: React.FC<ButtonProps> = ({ text, color }) => {
    return (
        <div>
            <Button className='tbbButton' variant='contained'  style={{ backgroundColor: color, color: 'white' }}>
                {text}
            </Button>
        </div>
    );
};

export default TbbButton;