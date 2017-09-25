    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
        <system.webServer>
            <httpRedirect enabled="true" destination="http://example.com" exactDestination="false" childOnly="true" httpResponseStatus="Permanent" />
        </system.webServer>
        <location path="Donanim">
                <system.webServer>
                    <httpRedirect enabled="true" destination="https://www.kia.com/tr/modeller/soul/donanimlar.html"  exactDestination="false" childOnly="true" httpResponseStatus="Permanent" />
                </system.webServer>
        </location>
    </configuration>