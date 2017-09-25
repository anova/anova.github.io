    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
        <system.webServer>
            <httpRedirect enabled="true" destination="http://example.com" exactDestination="false" childOnly="true" httpResponseStatus="Permanent" />
        </system.webServer>
        <location path="example-location">
                <system.webServer>
                    <httpRedirect enabled="true" destination="http://example.com/example-new-location"  exactDestination="false" childOnly="true" httpResponseStatus="Permanent" />
                </system.webServer>
        </location>
    </configuration>