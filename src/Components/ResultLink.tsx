
import {
  buildInteractiveResult,
  InteractiveResult,
  Result,
} from "@coveo/headless";
import { Link } from "@mui/material";
import { useContext } from "react";
import React from "react";
import EngineContext from '../common/engineContext';

interface ResultLinkProps {
  result: Result;
}

const engine = useContext(EngineContext)!;
export default class ResultLink1 extends React.Component<ResultLinkProps, {}> {

  private interactiveResult: InteractiveResult;
  private result: Result;
  constructor(props: ResultLinkProps) {
    super(props);
    this.result = props.result;
    this.interactiveResult = buildInteractiveResult(engine, {
      options: { result: props.result },
    });
  }

  render() {
    return (
      <Link
        href={this.result.clickUri}
        target="_blank"
        onClick={() => this.interactiveResult.select()}
      >
        {this.result.title}
      </Link>
    );
  }
}


