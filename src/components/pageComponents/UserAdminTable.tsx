import TablePagination from "../TableData/TablePagination";
import UserAdminDataCell from "../TableData/UserAdminDataCell";
import UserAdminHeader from "../TableData/UserAdminHeader";

const UserAdminTable = () => {
    return (
        <section className="containe">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <UserAdminHeader/>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    <UserAdminDataCell data={"data"}
                                        status={"active"}/>
                                    <UserAdminDataCell data={"data"}
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

export default UserAdminTable;