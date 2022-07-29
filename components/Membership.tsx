import { useRouter } from "next/router";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import { goToBillingPortal } from "../lib/stripe";
import Loader from "./Loader";

const Membership = () => {
  const [isBillingLoading, setBillingLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const subscription = useSubscription(user);

  const router = useRouter();

  const manageSubscription = () => {
    if (subscription) {
      setBillingLoading(true);
      goToBillingPortal();
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-2">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        {subscription ? (
          <button
            className="account-button"
            disabled={isBillingLoading || !subscription}
            onClick={manageSubscription}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-[#e50914]" />
            ) : (
              "Cancel Membership"
            )}
          </button>
        ) : (
          <button className="account-button" onClick={() => router.push("/")}>
            Subscribe to a plan
          </button>
        )}
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div className="">
            <p className="font-medium">{user?.email}</p>
            <p className="text-[gray]">**********</p>
          </div>

          <div className="md:text-right">
            <p className="membership-link">Change email</p>
            <p className="membership-link">Change password</p>
          </div>
        </div>

        <div className="">
          <div className="">
            <p>{subscription?.cancel_at_period_end ? "Your membership will end on " : " Your next billing date is "}
            {subscription?.current_period_end}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
