import WidgetBtn from "./WidgetBtn";

const HomeWidgetLg = () => {
  return (
    <div className="flex w-2/3 flex-col p-5 shadow-md">
      <h3 className="text-xl font-semibold">Lastest transactions</h3>
      <table className="mt-5 w-full border-separate table-fixed border-spacing-5 ">
          <tr className="text-left">
            <th >Customer</th>
            <th >Date</th>
            <th >Amount</th>
            <th >Status</th>
          </tr>
          <tr>
            <td className="flex items-center ">
              <img
                className="mr-3 h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
              />
              <span>Jane Doe</span>
            </td>
            <td className="font-light">06-march-2023</td>
            <td className="font-light">$5000.00</td>
            <td>
              <WidgetBtn type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center ">
              <img
                className="mr-3 h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
              />
              <span>Jane Doe</span>
            </td>
            <td className="font-light">06-march-2023</td>
            <td className="font-light">$5000.00</td>
            <td>
              <WidgetBtn type="Pending" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center ">
              <img
                className="mr-3 h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
              />
              <span>Jane Doe</span>
            </td>
            <td className="font-light">06-march-2023</td>
            <td className="font-light">$5000.00</td>
            <td>
              <WidgetBtn type="Pending" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center ">
              <img
                className="mr-3 h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
              />
              <span>Jane Doe</span>
            </td>
            <td className="font-light">06-march-2023</td>
            <td className="font-light">$5000.00</td>
            <td>
              <WidgetBtn type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center ">
              <img
                className="mr-3 h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
              />
              <span>Jane Doe</span>
            </td>
            <td className="font-light">06-march-2023</td>
            <td className="font-light">$5000.00</td>
            <td>
              <WidgetBtn type="Approved" />
            </td>
          </tr>
      </table>
    </div>
  );
};

export default HomeWidgetLg;
