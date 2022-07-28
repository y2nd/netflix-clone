import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import Loader from "./Loader";

const Membership = () => {
  const [isBillingLoading, setIsBillingLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const subscription = useSubscription(user);

  const manageSubscription = () => {
    if(subscription) {
        setIsBillingLoading(true);
        // goToBillingPortal();
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-2">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        <button
          className="bg-gray-300 text-black h-10 w-3/5 whitespace-nowrap py-2 text-sm font-medium shadow-md hover:bg-gray-200 md:w-4/5 rounded"
          disabled={isBillingLoading || !subscription}
        //   onClick={manageSubscription}
        >
          {isBillingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            `Cancel Membership`
          )}
        </button>
      </div>
    </div>
  );
};

export default Membership;
