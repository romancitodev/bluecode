import { AreaState } from '@/icons/small/state';

type CurrentState = { state: boolean };

export function State({ state }: CurrentState) {
	if (state) {
		return <AreaState open />;
	} else {
		return <AreaState occupied />;
	}
}