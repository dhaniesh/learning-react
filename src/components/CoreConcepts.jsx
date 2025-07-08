import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";
import { Section } from "./Section";

export function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
