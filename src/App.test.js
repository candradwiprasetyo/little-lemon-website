import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render layout correctly', () => {
  render(<App />);
  // navbar
  expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
  expect(screen.getAllByText('About')[0]).toBeInTheDocument();
  expect(screen.getAllByText('Menu')[0]).toBeInTheDocument();
  expect(screen.getAllByText('Reservation')[0]).toBeInTheDocument();
  expect(screen.getAllByText('Order Online')[0]).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();

  //hero
  expect(screen.getAllByText('LITTLE LEMON WEBSITE')[0]).toBeInTheDocument();
  expect(screen.getByText('Isaac Amend')).toBeInTheDocument();
  expect(screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')).toBeInTheDocument();
  expect(screen.getByText('Reserve a Table')).toBeInTheDocument();

  //online menu
  expect(screen.getByText('Specials')).toBeInTheDocument();
  expect(screen.getByText('Online Menu')).toBeInTheDocument();
  expect(screen.getByText('GreekSalad')).toBeInTheDocument();  
  expect(screen.getByText('Breechuta')).toBeInTheDocument();  
  expect(screen.getByText('Lemon desert')).toBeInTheDocument();  
  expect(screen.getAllByText('order delivery!')[0]).toBeInTheDocument();  

  //testimonials
  expect(screen.getByText('Testimonials')).toBeInTheDocument();
  expect(screen.getByText('James Rodrigues')).toBeInTheDocument();
  expect(screen.getByText('Lionel Messi')).toBeInTheDocument();
  expect(screen.getByText('Ronaldinho')).toBeInTheDocument();
  expect(screen.getByText('Tomas Mueller')).toBeInTheDocument();

  //Little Lemon Website  
  expect(screen.getAllByText('Little Lemon Website')[1]).toBeInTheDocument();
  expect(screen.getByText('A land kissed by the sun and caressed by the sea in a perfect combination of elements that will always remain the greatest source of prosperity for this corner of the Earth: a tiny plot of land that does not suffer with the evolution of time and seems still, magically frozen in a dimension of simplicity and perfection which in other parts of the world is hard to come by.” Nomadic Puglia')).toBeInTheDocument();

  //footer
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('Contant number 0251-8385841')).toBeInTheDocument();
  expect(screen.getByText('Whatsapp number +62-857-7022-9892')).toBeInTheDocument();
});
