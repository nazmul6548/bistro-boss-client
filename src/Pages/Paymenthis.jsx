import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider";
import useAxiosSecure from "../component/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Paymenthis = () => {

    const TdStyle = {
        ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-black lg:py-7 lg:px-4`,
        TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
        TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
        TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
      }
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments);
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl">this is payment history </h1>
            </div>
            <div>
            <h2 className="text3-xl text-center mt-5">Total Payments: {payments.length}</h2>
            <section className='bg-white text-blue-950 py-20 lg:py-[120px]'>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary text-slate-950'>
                <tr>
                    <th className={TdStyle.ThStyle}> Price</th>
                    <th className={TdStyle.ThStyle}> Transaction Id </th>
                    <th className={TdStyle.ThStyle}> Status </th>
                    {/* <th className={TdStyle.ThStyle}> Renewal </th>
                    <th className={TdStyle.ThStyle}> Transfer </th>
                    <th className={TdStyle.ThStyle}> Register </th> */}
                  </tr>
                </thead>

                <tbody>
               {
                payments.map(payment =>(
                    <tr key={payment._id}>
                    <td className={TdStyle.TdStyle}>${payment.price}</td>
                    <td className={TdStyle.TdStyle2}>{payment.transactionId}</td>
                    <td className={TdStyle.TdStyle}>{payment.status}</td>
                    
                  </tr>

                ))
               }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
        </div>
    );
};

export default Paymenthis;