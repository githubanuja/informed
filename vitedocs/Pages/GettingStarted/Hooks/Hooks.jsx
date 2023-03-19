import { Info } from '../../../Info';
import CarColor from '../CarColor/CarColor';
import CarColors from '../CarColors/CarColors';
import CarColorControl from '../CarColorControl/CarColorControl';
import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import Code from '../../../Code';

export default function Intro() {
  return (
    <>
      <h1>Hooks</h1>
      <Info>
        Informed gives you various hooks for getting access to the form state
        and api as well as specific field states and apis. This allows you to
        have fine grained control.
      </Info>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Hook
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>useFieldState</code>
            </Cell>
            <Cell>
              <Code>{`const { value, error } = useFieldState();`}</Code>
            </Cell>
            <Cell>Allows you to get access to specific fields state.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFieldApi</code>
            </Cell>
            <Cell>
              <Code>{`const { setValue, reset } = useFieldApi();

setValue('Hello World');`}</Code>
            </Cell>
            <Cell>Allows you to get access to specific fields api.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFormState</code>
            </Cell>
            <Cell>
              <Code>{`const { values, errors } = useFormState();`}</Code>
            </Cell>
            <Cell>Allows you to get access to entire form state.</Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFormApi</code>
            </Cell>
            <Cell>
              <Code>{`const { setValue, reset } = useFormApi();

setValue('greeting', 'Hello World');`}</Code>
            </Cell>
            <Cell>Allows you to get access to entire form api.</Cell>
          </Row>
        </TableBody>
      </TableView>

      <hr />
      <CarColor />
      <hr />
      <CarColors />
      <hr />
      <CarColorControl />

      <br />
      <br />
    </>
  );
}
