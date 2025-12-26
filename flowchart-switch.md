# Flowchart Switch Case

```mermaid
    flowchart TB
        Start@{ shape: circ, label: "start"}
        IS_FEATURE_ACTIVE@{ shape: lean-r, label: "input: IS_FEATURE_ACTIVE = ''''"}
        num@{ shape: lean-r, label: "input: num = 100"}

        CaseTrue@{ shape: diamond, label: "IS_FEATURE_ACTIVE == true"}
        OutputTrue@{ shape: lean-r, label: "Output: ''Hello''"}

        CaseFalse@{ shape: diamond, label: "IS_FEATURE_ACTIVE == false"}
        OutputFalse@{ shape: lean-r, label: "Output: ''Hi''"}

        Default@{ shape: diamond, label: "num === 100"}
        DefaultTrue@{ shape: lean-r, label: "Output: num"}
        DefaultFalse@{ shape: lean-r, label: "Output: ''Bonjour!''"}

        Stop@{ shape: dbl-circ, label: "Stop"}

    Start-->IS_FEATURE_ACTIVE-->num-->CaseTrue-->|False|CaseFalse-->|false|Default-->|false|DefaultFalse-->Stop

    CaseTrue-->|true|OutputTrue-->Stop
    CaseFalse-->|true|OutputFalse-->Stop

    Default-->|true|DefaultTrue-->Stop
```
