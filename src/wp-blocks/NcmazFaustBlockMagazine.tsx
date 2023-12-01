import { gql } from "@apollo/client";
import { NcmazFaustBlockMagazineFragmentFragment } from "../__generated__/graphql";
import { WordPressBlock } from "@faustwp/blocks";
import NcmazFaustBlockMagazineClient from "./NcmazFaustBlockMagazineClient";

const NcmazFaustBlockMagazine: WordPressBlock<
  NcmazFaustBlockMagazineFragmentFragment & {
    renderedHtml?: string;
    clientId?: string;
    parentClientId?: string;
  }
> = (props) => {
  const { hasBackground } = props.attributes || {};

  if (!props.renderedHtml) {
    return null;
  }

  const renderMainClient = () => {
    return <NcmazFaustBlockMagazineClient {...props} />;
  };

  return (
    <div className={`relative not-prose ${hasBackground ? "py-16" : ""}`}>
      <div dangerouslySetInnerHTML={{ __html: props.renderedHtml || "" }}></div>
      {renderMainClient()}
    </div>
  );
};

export const NcmazFaustBlockMagazineFragments = {
  entry: gql`
    fragment NcmazFaustBlockMagazineFragment on NcmazFaustBlockMagazine {
      attributes {
        blockVariation
        className
        hasBackground
      }
    }
  `,
  key: `NcmazFaustBlockMagazineFragment`,
};

NcmazFaustBlockMagazine.displayName = "NcmazFaustBlockMagazine";
export default NcmazFaustBlockMagazine;
