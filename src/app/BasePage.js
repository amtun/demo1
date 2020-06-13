import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {BuilderPage} from "./pages/BuilderPage";
import {MyPage} from "./pages/MyPage";
import {DashboardPage} from "./pages/DashboardPage";
import {WalletPage} from "./pages/WalletPage";
import {FxDashboardPage} from "./pages/FxDashboardPage";
import {DepositWalletPage} from "../app/modules/Wallet/pages/DepositWalletPage";
import {WithdrawWalletPage} from "../app/modules/Wallet/pages/WithdrawWalletPage";
import {ViewWalletPage} from "../app/modules/Wallet/pages/ViewWalletPage";
import {TransferFundsWalletPage} from "../app/modules/Wallet/pages/TransferFundsWalletPage";
import {ExpertAdvisorPage} from "../app/modules/Package/pages/ExpertAdvisorPage";
import {NetworkPage} from "../app/modules/Network/pages/NetworkPage";
import {SummaryTransactionPage} from "../app/modules/Summary/pages/SummaryTransactionPage"
import {SummaryDirectPage} from "../app/modules/Summary/pages/SummaryDirectPage"
import {SummaryBinaryPage} from "../app/modules/Summary/pages/SummaryBinaryPage"
import {SummaryTransferPage} from "../app/modules/Summary/pages/SummaryTransferPage"
import {ProfilePage} from "../app/modules/Profile/pages/ProfilePage"

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                {/* <ContentRoute path="/dashboard" component={DashboardPage}/> */}
                {/* <ContentRoute path="/builder" component={BuilderPage}/> */}
                {/* <ContentRoute path="/my-page" component={MyPage}/> */}
                <ContentRoute path="/dashboard" component={FxDashboardPage}/>
                <ContentRoute path="/wallet-page" component={WalletPage} />
                <ContentRoute path="/deposit-wallet" component={DepositWalletPage} />
                <ContentRoute path="/withdraw-wallet" component={WithdrawWalletPage} />
                <ContentRoute path="/view-wallet" component={ViewWalletPage} />
                <ContentRoute path="/transfer-wallet" component={TransferFundsWalletPage}/>
                <ContentRoute path="/expert-advisor" component={ExpertAdvisorPage}/>
                <ContentRoute path="/network" component={NetworkPage}/>
                <ContentRoute path="/summary-transaction" component={SummaryTransactionPage}/>
                <ContentRoute path="/summary-direct" component={SummaryDirectPage}/>
                <ContentRoute path="/summary-binary" component={SummaryBinaryPage}/>
                <ContentRoute path="/summary-transfer" component={SummaryTransferPage}/>
                <ContentRoute path="/profile" component={ProfilePage}/>
                
                <Route path="/google-material" component={GoogleMaterialPage}/>
                <Route path="/react-bootstrap" component={ReactBootstrapPage}/>
                <Route path="/e-commerce" component={ECommercePage}/>
                <Redirect to="error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
