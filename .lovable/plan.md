
Issue confirmation:
- Yes — what you’re seeing is possible and expected for a Shopify-managed root domain.
- Shopify allows deleting subdomains (like `www...`) but may not allow removing the root/apex domain (`khaleesi.shop`) when the domain is Shopify-managed.
- So “can’t remove `khaleesi.shop`, can remove `www...`” is consistent with Shopify behavior.

Plan to resolve the redirect loop (without code changes):
1. Do not click “Reset DNS settings” in Shopify.
   - That usually restores Shopify default DNS and can force traffic back to Shopify.
2. Keep DNS pointed to Lovable:
   - `A @ -> 185.158.133.1`
   - `A www -> 185.158.133.1`
   - Keep `_lovable` and `_lovable.www` TXT verification records.
3. In Shopify Domains, make sure `fcd20t-gd.myshopify.com` is the primary domain (not `khaleesi.shop`).
4. Keep `khaleesi.shop` connected only as DNS management if Shopify won’t let you remove it, but ensure it is not active as storefront primary/redirect target.
5. Verify both spellings:
   - You wrote `www.khalessi.shop` once (double-check typo vs `www.khaleesi.shop`).
6. Test from a clean resolver path:
   - Incognito + different network (mobile data), then test `khaleesi.shop` and `www.khaleesi.shop`.

If still showing Shopify password page after these steps:
- Escalate to Shopify Support and ask them to detach `khaleesi.shop` from Online Store storefront routing while leaving DNS zone management intact.
- This is the likely blocker when DNS records are correct but storefront still serves Shopify password page.

Technical details:
- Shopify Help docs state Shopify-managed root domains often can’t be removed; subdomains can be removed unless primary.
- The practical goal is not “delete root domain,” but “stop Shopify storefront from owning HTTP routing for that host.”
- DNS and storefront ownership are separate layers:
  - DNS layer: where `A` records point.
  - Storefront layer: which platform answers for the host at HTTP level.
