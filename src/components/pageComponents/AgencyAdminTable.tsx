import AgencyOverviewDataCell from "../TableData/AgencyOverviewDataCell";
import AgencyOverviewHeader from "../TableData/AgencyOverviewHeader";
import TablePagination from "../TableData/TablePagination";

const AgencyAdminTable = () => {
    return (
        <section className="containe">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <AgencyOverviewHeader/>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    <AgencyOverviewDataCell data={"data"}
                                        status={"active"}/>
                                    <AgencyOverviewDataCell data={"data"}
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

export default AgencyAdminTable;