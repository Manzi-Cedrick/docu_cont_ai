import TablePagination from "../TableData/TablePagination";
import UserAccountsDataCell from "../TableData/UserAccountsDataCell";
import UserAccountsHeader from "../TableData/UserAccountsHeader";

const UserAccountsTable = () => {
    return (
        <section className="containe">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                            <div className="flex flex-row px-4 bg-white py-4 items-center justify-start gap-4">
                                <div className="h-10">
                                    <select className="border-2 border-bdr bg-transparent h-full px-4 rounded-md">
                                        <option value="#">CIF/DNI</option>
                                        <option value="#">CIF 1</option>
                                        <option value="#">CIF 2</option>
                                        <option value="#">CIF 3</option>
                                    </select>
                                </div>
                                <div className="h-10">
                                    <input className="border-2 border-bdr bg-transparent focus:border-primary h-full rounded-md px-4" type="date"/>
                                </div>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <UserAccountsHeader/>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    <UserAccountsDataCell data={"data"}
                                        status={"active"}/>
                                    <UserAccountsDataCell data={"data"}
                                        status={"inactive"}/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <TablePagination/>
        </section>
    );
};

export default UserAccountsTable;
