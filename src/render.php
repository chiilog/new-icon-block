<?php
/**
 * @var array $attributes The block attributes.
 * @var string $content The block content.
 * @var WP_Block $block The block object.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$content = '<div ' . get_block_wrapper_attributes() . '>' . esc_html( $attributes['text'] ) . '</div>';

try {
	// 期間を取得。ここで半角に変換しておく
	$period = mb_convert_kana( $attributes['period'], 'n', 'UTF-8' );

	// 期間が数値でない場合はデフォルト値をセット
	if ( ! is_numeric( $period ) ) {
		$period = 7;
	}

	// 投稿日から指定日数後の日付を取得
	$post_date    = new DateTime( get_the_date( 'Y-m-d' ) );
	$post_date->modify( '+' . $period . ' days' );

	// 今日の日付
	$current_date = new DateTime();

	if ( $post_date >= $current_date ) :
		echo wp_kses_post( $content );
	endif;
} catch ( Exception $e ) {
	echo wp_kses_post( $content );
}
