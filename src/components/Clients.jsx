import { clients } from '../constants';
import styles from '../style'

const Clients = () =>  (
    <section className={`flex md:flex-row flex-col justify-between ${styles.marginY} items-center`}>
      {clients.map(client => (
        <div key={client.id} className='w-[192px] h-[60px] flex items-center justify-center mt-6'>
          <img src={client.logo} alt="" />
        </div>
      ))}
      
    </section>
  )


export default Clients
