import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Facet from "./Facet";
// import { buildDateFacet } from '@coveo/headless';
// import EngineContext from '../common/engineContext';
// import { DateFacet } from './DateFacet';
// import { buildDateRange } from '../utils/date-utils';

// const engine = useContext(EngineContext)!;

// const controller = buildDateFacet(engine, {
//    options: {
//      field: 'created',
//      generateAutomaticRanges: false,
//      currentValues: [ // Must be specified when `generateAutomaticRanges` is false.
//        buildDateRange({
//          start: new Date(2015, 1),
//          end: new Date(2018, 1),
//        }),
//        buildDateRange({
//          start: new Date(2018, 1),
//          end: new Date(2020, 1),
//        }),
//        buildDateRange({
//          start: new Date(2020, 1),
//          end: new Date(2021, 1),
//        }),
//      ],
//    },
//  });

const FacetList = () => {

  return (
    <Box>
      <Box px={1} pb={1}>
        <Typography variant="overline">Refine By</Typography>

        <Facet field="sfresolution__c" title="sfresolution__c" />
        <Facet field="objecttype" title="Object Type" />
        {/* <DateFacet controller={controller} />; */}
        <Facet field="filetype" title="File Type" />
        <Facet field="source" title="Source" />
      </Box>
    </Box>
  );
};

export default FacetList;
