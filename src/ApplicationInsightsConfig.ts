///<reference path="./typings/applicationinsights-js/applicationinsights-js.d.ts"/>

module AngularJs.AppInsightJsV2 {
  export class ApplicationInsightsConfig implements Microsoft.ApplicationInsights.IConfig {
    applicationName?:string;  
    instrumentationKey?: string;
    endpointUrl?: string;
    emitLineDelimitedJson?: boolean;
    accountId?: string;
    sessionRenewalMs?: number;
    sessionExpirationMs?: number;
    maxBatchSizeInBytes?: number;
    maxBatchInterval?: number;
    enableDebug?: boolean;
    disableExceptionTracking?: boolean;
    disableTelemetry?: boolean;
    verboseLogging?: boolean;
    diagnosticLogInterval?: number;
    samplingPercentage?: number;
    autoTrackPageVisitTime?: boolean;
    disableAjaxTracking?: boolean;
    overridePageViewDuration?: boolean;
    maxAjaxCallsPerView?: number;
    disableDataLossAnalysis?: boolean;
    disableCorrelationHeaders?: boolean;
    correlationHeaderExcludedDomains?: string[];
    disableFlushOnBeforeUnload?: boolean;
    enableSessionStorageBuffer?: boolean;
    isCookieUseDisabled?: boolean;
    cookieDomain?: string;
    isRetryDisabled?: boolean;
    url?: string;
    isStorageUseDisabled?: boolean;
    isBeaconApiDisabled?: boolean;
    sdkExtension?: string;
    isBrowserLinkTrackingEnabled?: boolean;
    appId?: string;
    enableCorsCorrelation?: boolean;
    autoStateChangeTracking?: boolean;
    autoLogTracking?:boolean;
  }
}