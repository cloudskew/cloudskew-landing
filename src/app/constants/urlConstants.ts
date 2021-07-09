import { environment } from "src/environments/environment";

export class UrlConstants {
    // Please keep this list alphabetically sorted.
    public static readonly appUrl = environment.appUrl;
    public static readonly blogUrl = environment.blogUrl;
    public static readonly brandingLogoUrl = `${environment.cdnUrlPrefix}/assets/logos/cloudskew-logo.png`
    public static readonly docsUrl = environment.docsUrl;
    public static readonly privacyPolicyUrl = `${environment.docsUrl}/about/privacy-policy.html`;
    public static readonly statusUrl = `${environment.docsUrl}/status/current-status.html`;
    public static readonly termsOfServiceUrl = `${environment.docsUrl}/about/terms-of-service.html`;
}